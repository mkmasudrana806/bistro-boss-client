import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
