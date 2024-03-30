import { useSearchParams } from "react-router-dom";
import ForgotPassword from "../Components/AuthPageComponents/ForgotPasswordComponents/ForgotPassword";
import ConfirmResetPassword from "../Components/AuthPageComponents/ForgotPasswordComponents/ConfirmResetPassword";

const ForgottenPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token: string | null = searchParams.get("token");

  return token ? <ConfirmResetPassword token={token} /> : <ForgotPassword />;
};

export default ForgottenPassword;
