import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
  const navigate = useNavigate();

  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;

  return (
    <SheetContent className="sm:max-w-md shadow-lg border bg-white  border-gray-300 w-full rounded-lg text-black">
      <SheetHeader >
        <SheetTitle className="text-black">Keranjang</SheetTitle>
      </SheetHeader>
      <div className="mt-8 space-y-4">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="font-bold">Rp {totalCartAmount.toLocaleString("id-ID")}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/admin/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-800"
      >
        Proses Pesanan
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;