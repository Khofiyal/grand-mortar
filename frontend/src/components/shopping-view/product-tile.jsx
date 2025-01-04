import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";

function ShoppingProductTile({
  product,
  handleGetProductDetails,
  handleAddtoCart,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto bg-white border-gray-300">
      <div onClick={() => handleGetProductDetails(product?._id)}>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.totalStock === 0 ? (
            <Badge className="absolute bg-red-500 top-2 left-2 hover:bg-red-600">
              Produk Habis
            </Badge>
          ) : product?.totalStock < 10 ? (
            <Badge className="absolute bg-red-500 top-2 left-2 hover:bg-red-600">
              {`Only ${product?.totalStock} items left`}
            </Badge>
          ) : product?.salePrice > 0 ? (
            <Badge className="absolute bg-red-500 top-2 left-2 hover:bg-red-600">
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="mb-2 text-xl font-bold text-black">{product?.title}</h2>
          <div className="flex items-center justify-between mb-2">
            {/* <span className="text-[16px] text-black">
              {categoryOptionsMap[product?.category]}
            </span> */}
            {/* <span className="text-[16px] text-slate-300">
              {brandOptionsMap[product?.brand]}
            </span> */}
          </div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "line-through text-red-600" : ""
              } text-lg font-semibold text-slate-700`}
            >
              Rp {product?.price.toLocaleString("id-ID")}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-black">
                Rp {product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {product?.totalStock === 0 ? (
          <Button className="w-full cursor-not-allowed opacity-60">
            Produk Habis
          </Button>
        ) : (
          <Button
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
            className="w-full bg-blue-700 hover:bg-blue-900"
          >
            Tambah ke Keranjang
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;