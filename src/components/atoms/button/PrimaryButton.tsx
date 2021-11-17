import { Button } from "@chakra-ui/button";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClickLogin: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClickLogin, disabled = false, loading = false } = props;
  return (
    <Button
      bg="teal"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={onClickLogin}
    >
      {children}
    </Button>
  );
});
