import React, { useState } from "react";

import styles from "./auth.module.sass";

const Auth = () => {
  const handleSubmit = (form) => {
    console.log(form, "FORM");
  };
  return (
    <div className={styles.wrapper}>
      <AuthForm
        initialValue={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ form, handleChange, onSubmit }) => (
          <>
            {JSON.stringify(form)}

            <Form onSubmit={onSubmit} form={form}>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                label="name"
              />
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                label="email"
              />
              <Input
                name="password"
                value={form.password}
                onChange={handleChange}
                label="password"
                type="password"
              />
            </Form>
          </>
        )}
      </AuthForm>
    </div>
  );
};

export default Auth;

function AuthForm({ onSubmit, initialValue, children }) {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return <>{children({ form, handleChange, onSubmit })}</>;
}

function Input({ name, label, type, ...props }) {
  const htmlFor = `text-${Math.random()}`;
  return (
    <div className={styles.input__wrapper}>
      <input
        {...props}
        name={name}
        id={htmlFor}
        className={styles.input}
        type={type}
      />
      <label className={styles.input__label} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
}
Input.defaultProps = {
  type: "text",
};

const Form = ({ className, children, onSubmit, form }) => {
  const [step, setStep] = useState(0);
  const childrenArr = React.Children.toArray(children);
  console.log(childrenArr[step].props,'PROPS');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < childrenArr.length - 1) {
      setStep((s) => s + 1);
    } else {
      onSubmit(form);
    }
  };
  console.log(form, "value");
  return (
    <form className={className} onSubmit={handleSubmit}>
      {childrenArr[step]}
      <button type="submit">submit</button>
    </form>
  );
};
