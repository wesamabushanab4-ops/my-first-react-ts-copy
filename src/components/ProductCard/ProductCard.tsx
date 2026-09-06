export default function ProductCard() {
    return (
        <div className="w-80 bg-amber-50 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900">Laptop</h3>
            <p className="mt-3 text-gray-600">Price: 4000</p>
            <button className="mt-5 bg-rose-600 text-white px-4 py-2 rounded" type="button">
                Buy Now
            </button>
        </div>
    )
}
