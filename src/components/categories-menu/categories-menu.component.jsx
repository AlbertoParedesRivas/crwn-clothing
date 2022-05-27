import CategoryItem from "../category-item/category-item.component";
import "./categories-menu.style.scss";

const CategoriesMenu = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map( category => (
                <CategoryItem category={category} key={category.id}></CategoryItem>
            ))}
        </div>
    );
}

export default CategoriesMenu;