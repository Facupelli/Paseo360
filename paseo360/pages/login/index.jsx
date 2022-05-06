import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Link from "next/link";
import { NavBar } from "components/NavBar/NavBar";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    console.log(data);

    const res = await axios.post("/login", data).catch((e) => {
      if (e.response) {
        console.log(e.response.data);
      }
    });
    if (res) {
      const { data } = res;
      console.log(data);
    }
  };

  return (
    <div>
      <NavBar route="login" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("email")}
            type="text"
            placeholder="example@gmail.com"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="12345"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        <p>No estas registrado?</p>
        <p>
          Registrate en Paseo360 y accede a nuestro servicio de publicacion de
          anuncios inmobiliarios!
        </p>
        <Link href="/register">
          <a>Registrate</a>
        </Link>
      </div>
    </div>
  );
}
