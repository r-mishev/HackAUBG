interface ConfirmResetPasswordProps {
  token: string;
}

const ConfirmResetPassword: React.FC<ConfirmResetPasswordProps> = ({
  token,
}) => {
  return <>{token}</>;
};

export default ConfirmResetPassword;
