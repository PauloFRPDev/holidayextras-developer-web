import { FormEvent, useRef, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as Yup from "yup";

import getValidationErrors from "../../utils/getValidationErrors";
import { api } from "../../service/api";

import { Container } from "./styles";

interface FormProps {
  type: string;
}

interface ParamsProps {
  user_id: string;
}

interface LocationProps {
  params: {
    user: {
      email: string;
      givenName: string;
      familyName: string;
    };
  };
}

interface UserProps {
  email: string;
  givenName: string;
  familyName: string;
}

interface ErrorProps {
  email?: string;
  givenName?: string;
  familyName?: string;
}

function Form({ type }: FormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const givenNameRef = useRef<HTMLInputElement>(null);
  const familyNameRef = useRef<HTMLInputElement>(null);

  const [user, setUser] = useState<UserProps>();
  const [yupErrors, setYupErrors] = useState<ErrorProps>({});
  const [serverError, setServerError] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  const { user_id } = useParams<ParamsProps>();

  const history = useHistory();
  const location = useLocation<LocationProps>();

  useEffect(() => {
    type === "update" && setUser(location.state.params?.user);
  }, [type, location, user]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");
    setYupErrors({});
    setUserCreated(false);

    try {
      const formData = {
        email: emailRef.current?.value,
        givenName: givenNameRef.current?.value,
        familyName: familyNameRef.current?.value,
      };

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is mandatory")
          .email("Write a valid email"),
        givenName: Yup.string().required("Given name is mandatory"),
        familyName: Yup.string().required("Family name is mandatory"),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      type === "create"
        ? await api.post("/users", formData)
        : await api.put(`/users/${user_id}`, formData);

      setUserCreated(true);

      type === "update" && history.push("/list_users");

      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        setYupErrors(errors);
      } else {
        setServerError(err.response.data.message);
      }
    }
  };

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label>
          Email{" "}
          <input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Please write your email"
            defaultValue={user && user.email}
          />
        </label>
        {yupErrors?.email && <span>!! {yupErrors.email} !!</span>}
      </div>

      <div>
        <label>
          Given Name{" "}
          <input
            type="text"
            ref={givenNameRef}
            name="givenName"
            placeholder="Please write your given name"
            defaultValue={user && user.givenName}
          />
        </label>
        {yupErrors?.givenName && <span>!! {yupErrors.givenName} !!</span>}
      </div>

      <div>
        <label>
          Family Name{" "}
          <input
            type="text"
            ref={familyNameRef}
            name="familyName"
            placeholder="Please write your family name"
            defaultValue={user && user.familyName}
          />
        </label>
        {yupErrors?.familyName && <span>!! {yupErrors.familyName} !!</span>}
      </div>

      {serverError ? (
        <span>!! {serverError} !!</span>
      ) : (
        userCreated && <span>User created successfully!</span>
      )}

      <button type="submit">{type === "create" ? "Create" : "Update"}</button>
    </Container>
  );
}

export { Form };
