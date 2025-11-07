import { useEffect, useState } from "react";
import { getSale } from "../../api/sales";
import { getUser } from "../../api/users";
import { getSaleDetailBySalesId } from "../../api/sale-detail";
import { formatDate } from "../../utils/date";
import { countSubtotal } from "../../utils/countBills";
import { formatToRupiah } from "../../utils/currency";
import ReceiptProduct from "./receipt-product";

export default function Receipt({
  saleId,
  togglePaymentForm,
  handleToggleReceipt,
  productOrders,
}) {
  const [sale, setSale] = useState([]);
  const [saleDate, setSaleDate] = useState("");
  const [user, setUser] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const saleData = await getSale(saleId);
      const userData = await getUser(saleData.user_id);
      const saleDetailData = await getSaleDetailBySalesId(saleId);

      setSale(saleData);
      setUser(userData);
      setSaleDate(formatDate(saleData.created_at));

      const subtotal = countSubtotal(productOrders);
      setSubTotal(formatToRupiah(subtotal));
      setTotal(formatToRupiah(subtotal));
      setPaidAmount(formatToRupiah(saleData.paid_amount));
      setChangeAmount(formatToRupiah(saleData.change_amount));
    };

    fetchData();
  }, [saleId, productOrders]);

  const handlePrint = () => {
    const printContent = document.getElementById("receipt-print").innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body {
              font-family: "Courier New", monospace;
              padding: 10px;
              font-size: 12px;
            }
            .receipt-container {
              width: 280px;
              margin: auto;
            }
            h1 {
              text-align: center;
              margin-bottom: 10px;
              font-size: 18px;
            }
            .divider {
              border-top: 1px dashed #000;
              margin: 8px 0;
            }
            .flex {
              display: flex;
              justify-content: space-between;
            }
            .center {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">${printContent}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleCancel = () => {
    handleToggleReceipt(0);
    togglePaymentForm();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-40" />

      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative font-mono">
          <div id="receipt-print">
            <h1 className="text-2xl font-bold text-center">Receipt</h1>
            <p className="text-center text-sm text-gray-600 mb-1">DGF STORE</p>
            <p className="text-center text-xs text-gray-400 mb-4">{saleDate}</p>

            <hr className="border-dashed border-gray-400 my-2" />

            <div className="text-sm mb-3">
              <p>Kasir: {user.username}</p>
            </div>

            <hr className="border-dashed border-gray-400 my-2" />

            <div className="text-sm mb-3 space-y-1">
              {productOrders.map((order) => (
                <ReceiptProduct key={order.id} product={order} />
              ))}
            </div>

            <hr className="border-dashed border-gray-400 my-2" />

            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>{subTotal}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Bayar (Cash)</span>
                <span>{paidAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Kembalian</span>
                <span>{changeAmount}</span>
              </div>
            </div>

            <hr className="border-dashed border-gray-400 my-2" />

            <p className="text-center text-xs text-gray-500 mt-2">
              Terima kasih telah berbelanja!
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <button
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
              onClick={handlePrint}
            >
              Print Receipt
            </button>
            <button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
              onClick={handleCancel}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
