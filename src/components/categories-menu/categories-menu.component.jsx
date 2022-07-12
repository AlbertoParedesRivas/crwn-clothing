import DirectoryItem from "../directory-item/directory-item.component";
import "./categories-menu.styles.scss";

const CategoriesMenu = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem
                    category={category}
                    key={category.id}
                ></DirectoryItem>
            ))}
        </div>
    );
};

export default CategoriesMenu;
