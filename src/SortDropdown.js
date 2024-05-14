import "./Sort.css";
function SortDropdown ({handleSortChange}) {
    return (
        <div className="container-sort">
            <select id="sort" className="bold-select" onChange={handleSortChange}>
                <option value="modelaz">Model (A-Z)</option>
                <option value="modelza">Model (Z-A)</option>
                <option value="brandaz">Brand (A-Z)</option>
                <option value="brandza">Brand (Z-A)</option>
                <option value="pricelowhigh">Price ↑</option>
                <option value="pricehighlow">Price ↓</option>
            </select>
    </div>
    )
}

export default SortDropdown;