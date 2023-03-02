import {
  createContext,
  ReactNode,
  useState,
  createRef,
  RefObject,
} from "react";

interface IPropsFunction {
  children: ReactNode;
}
interface InputRefProps {
  focusOnError: (state: boolean, focus?: boolean) => void;
}

interface ValidatorContextData {
  name: string;
  errorName: string;
  inputNameRef: RefObject<InputRefProps>;
  setName: (name: string) => void;
  nameValidator: (focus: boolean) => void;

  cpf: string;
  errorCpf: string;
  inputCpfRef: RefObject<InputRefProps>;
  setCpf: (name: string) => void;
  cpfValidator: (focus: boolean) => void;

  email: string;
  errorEmail: string;
  inputEmailRef: RefObject<InputRefProps>;
  setEmail: (name: string) => void;
  emailValidator: (focus: boolean) => void;

  password: string;
  errorPassword: string;
  inputPasswordRef: RefObject<InputRefProps>;
  setPassword: (name: string) => void;
  passwordValidator: (focus: boolean) => void;
}

export const ValidatorContext = createContext({} as ValidatorContextData);

export function ValidatorProvider({ children }: IPropsFunction) {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("unvalidated");
  const inputNameRef = createRef<InputRefProps>();

  const [cpf, setCpf] = useState("");
  const [errorCpf, setErrorCpf] = useState("unvalidated");
  const inputCpfRef = createRef<InputRefProps>();

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("unvalidated");
  const inputEmailRef = createRef<InputRefProps>();

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("unvalidated");
  const inputPasswordRef = createRef<InputRefProps>();

  function nameValidator(focus: boolean) {
    if (name.length < 10) {
      inputNameRef.current?.focusOnError(true, focus);
      return setErrorName("Digite seu nome completo.");
    }

    inputNameRef.current?.focusOnError(false);
    return setErrorName("success");
  }

  function cpfValidator(focus: boolean) {
    function validarCPF(cpf: string) {
      cpf = cpf.replace(/[^\d]+/g, "");
      if (cpf == "")
        return (
          setErrorCpf("Insira seu CPF"),
          inputCpfRef.current?.focusOnError(true, focus)
        );
      // Elimina CPFs invalidos conhecidos
      if (
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
      )
        return (
          setErrorCpf("CPF invalido"),
          inputCpfRef.current?.focusOnError(true, focus)
        );
      // Valida 1o digito
      let add = 0;
      for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
      let rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(9)))
        return (
          setErrorCpf("CPF invalido"),
          inputCpfRef.current?.focusOnError(true, focus)
        );
      // Valida 2o digito
      add = 0;
      for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
      if (rev == 10 || rev == 11) rev = 0;
      if (rev != parseInt(cpf.charAt(10)))
        return (
          setErrorCpf("CPF invalido"),
          inputCpfRef.current?.focusOnError(true, focus)
        );
      inputCpfRef.current?.focusOnError(false, focus);
      return setErrorCpf("success");
    }

    validarCPF(cpf);
  }

  function emailValidator(focus: boolean) {
    if (email == "") {
      inputEmailRef.current?.focusOnError(true, focus);
      return setErrorEmail("Digite seu e-mail.");
    }

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(email) !== true) {
      inputEmailRef.current?.focusOnError(true, focus);
      return setErrorEmail("E-mail invalido.");
    }

    inputEmailRef.current?.focusOnError(false);
    return setErrorEmail("success");
  }

  function passwordValidator(focus: boolean) {
    if (password == "") {
      inputPasswordRef.current?.focusOnError(true, focus);
      return setErrorPassword("Digite uma senha de acesso");
    }
    if (password.length < 8) {
      inputPasswordRef.current?.focusOnError(true, focus);
      return setErrorPassword("Sua senha precisa ter mais 8 ou mais caracteres.");
    }

    inputPasswordRef.current?.focusOnError(false);
    return setErrorPassword("success");
  }
  return (
    <ValidatorContext.Provider
      value={{
        errorName,
        inputNameRef,
        name,
        setName,
        nameValidator,
        cpf,
        cpfValidator,
        errorCpf,
        inputCpfRef,
        setCpf,
        email,
        emailValidator,
        errorEmail,
        inputEmailRef,
        setEmail,
        errorPassword,
        inputPasswordRef,
        password,
        passwordValidator,
        setPassword,
      }}
    >
      {children}
    </ValidatorContext.Provider>
  );
}
