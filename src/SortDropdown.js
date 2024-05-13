import "./Sort.css";
function SortDropdown ({handleSortChange}) {
    return (
        <div className="container-sort">
            <select id="sort" className="poppins-bold-select" onChange={handleSortChange}>
                <option className="poppins-semibold" value="modelaz">Model (A-Z)</option>
                <option className="poppins-semibold" value="modelza">Model (Z-A)</option>
                <option className="poppins-semibold" value="brandaz">Brand (A-Z)</option>
                <option className="poppins-semibold" value="brandza">Brand (Z-A)</option>
                <option className="poppins-semibold" value="pricelowhigh">Price ↑</option>
                <option className="poppins-semibold" value="pricehighlow">Price ↓</option>
            </select>
    </div>
    )
}

export default SortDropdown;