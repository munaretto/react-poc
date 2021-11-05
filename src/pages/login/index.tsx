import React from "react";
import Button from "../../shared/components/button";
import Input from "../../shared/components/input";
import "./styles.css";
import { Card, PageWrapper, Title } from "./styles";

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
        <Card>
          <section className="title">
            <h2>Faça seu login</h2>
          </section>
          
          <form>
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
            <section className="action">
              <Button onClick={this.handleSubmit} primary>ENTRAR</Button>
            </section>
            <section className="forgot-password">
              <a href="/" rel="noopener noreferrer">Esqueci minha senha</a>
            </section>
          </form>
        </Card>
      </PageWrapper>
    );
  }
}
