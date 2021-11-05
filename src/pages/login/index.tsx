import React from "react";
import Button from "../../shared/components/button";
import Input from "../../shared/components/input";
import "./styles.css";
import { PageWrapper } from "./styles";

type LoginState = { email: string | undefined; password: string | undefined };

export default class Login extends React.Component<{}, LoginState> {
  constructor(props: any) {
    super(props);
    this.state = { email: undefined, password: undefined };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value } as LoginState);
  }

  handleSubmit(event: any) {
    alert(`STATE: ${this.state.password}`);
  }

  handleReset() {
    this.setState({
      email: undefined,
      password: undefined,
    });
  }

  render() {
    return (
      <PageWrapper>
        <section className="content-wrapper">
          <section className="cta">
            <section className="header">
              <h2>Coezzion</h2>
            </section>
            
            <section className="spacer">
              <h2>Olá! Seja bem-vindo.</h2>
              <p>Faça login ou crie uma nova conta.</p>
            </section>
            
          </section>
          <section className="login-action">
            <section className="header">
              <h1>Fazer login</h1>
              <p>Novo usuário? <a href="/">Crie uma conta</a>.</p>
            </section>
            

            <form className="spacer">
              <Input
                onChange={this.handleChange}
                label="E-mail"
                name="email"
                required
                placeholder="Informe seu e-mail"
              />
              <Input
                onChange={this.handleChange}
                name="password"
                label="Senha"
                type="password"
                required
                placeholder="Informe sua senha"
              />

              <section className="login-and-recovery">
                <a href="/">Esqueci minha senha</a>
                <Button onClick={this.handleSubmit} primary>Continuar</Button>
              </section>

              <section className="separator">
                <p>Ou</p>  
              </section>

              <section className="social-login">
                <Button onClick={this.handleSubmit} primary>Continuar com o Google</Button>
              </section>
              
            </form>
          </section>
        </section>
      </PageWrapper>
    );
  }
}
