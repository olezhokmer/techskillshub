import { useEffect, useState } from 'react';
import Checkbox from './form-builder/checkbox';
import Slider from 'rc-slider';
import { getCategories } from 'utils/server';
import { CategoryType } from 'types';


const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [categories, setCategories] = useState([] as CategoryType[]);

  useEffect(() => {
    const updateCategories = async () => {
      const categories = await getCategories();

      setCategories(categories);
    };

    updateCategories();
  }, []);

  const addQueryParams = () => {

  }

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button type="button" 
        onClick={() => setFiltersOpen(!filtersOpen)} 
        className={`products-filter__menu-btn ${filtersOpen ? 'products-filter__menu-btn--active' : ''}`}>
          Add Filter <i className="icon-down-open"></i>
      </button>
      
      <div className={`products-filter__wrapper ${filtersOpen ? 'products-filter__wrapper--open' : ''}`}>
        <div className="products-filter__block">
          <button type="button">Course type</button>
          <div className="products-filter__block__content">
            {categories.map(type => (
              <Checkbox 
                key={type.id} 
                name="product-type" 
                label={type.name} 
              />
            ))}
          </div>
        </div>

        <div className="products-filter__block">
          <button type="button">Price</button>
          <div className="products-filter__block__content">
            <Range min={0} max={1000} defaultValue={[50, 300]} tipFormatter={value => `${value}$`} />
          </div>
        </div>
      </div>
    </form>
  )
}
  
export default ProductsFilter
  