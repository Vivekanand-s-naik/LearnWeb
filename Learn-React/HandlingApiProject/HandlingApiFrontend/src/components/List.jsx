import { useCallback } from "react";
import { List } from "react-window";
function LazyList({items=[]}) {

    const row = useCallback(({ index, style }) => {
        const item = items[index];
        return (
            <div style={style}>
                <div className="max-w-sm mx-auto overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5">
                    {/* Category Tag */}
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full tracking-wide uppercase">
                        {item.category}
                    </span>

                    {/* item Name */}
                    <h2 className="mt-3 text-xl font-bold text-gray-800 tracking-tight">
                        {item.name}
                    </h2>

                    {/* Row for Price & Stock Info */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-50">
                        {/* Price */}
                        <div>
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Price</p>
                            <p className="text-2xl font-extrabold text-gray-900">${item.price}</p>
                        </div>

                        {/* Stock Status Badge */}
                        <div className="text-right">
                            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Availability</p>
                            <span className={`inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${item.stock < 10
                                    ? 'bg-amber-50 text-amber-700'
                                    : 'bg-emerald-50 text-emerald-700'
                                }`}>
                                {/* Dynamic low stock warning dot */}
                                <span className={`w-1.5 h-1.5 mr-1.5 rounded-full ${item.stock < 10 ? 'bg-amber-500' : 'bg-emerald-500'
                                    }`}></span>
                                {item.stock} left
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }, [items])
    return (
        <div>
            <List
            rowComponent={row}
            rowHeight={100}
            rowCount={items.length}
            rowProps={{ items }}
            style={{
                height: 600,
                width: 600
            }}
            />
        </div>
    )
}

export default LazyList