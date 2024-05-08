import { getListSelect } from '@/api/getListSelect';
import FormCreateProducts from '@/components/Admin/FormUpdate/FormCreateProducts';
import { IBrand, ICategory, ICharacter, ISeries } from '@/interfaces';
import * as React from 'react';

export interface IpageProps {
}

export default async function page (props: IpageProps) {
  const categories = await getListSelect("categories");
 
  const brands = await getListSelect("brands");
 
  const series = await getListSelect("series");
 
  const characters = await getListSelect("characters");

  const optionCategories = categories.map((item :ICategory) => {
    return {
      value: item.category_id,
      label: item.name,
    };
  });
  // console.log("optionCategories", optionCategories);
  
const optionBrands = brands.map((item :IBrand) => {
  return {
    value: item.brand_id,
    label: item.name,
  };
});
const optionSeries = series.map((item :ISeries) => {
  return {
    value: item.series_id,
    label: item.name,
  };
});
const optionCharacters = characters.map((item :ICharacter) => {
  return {
    value: item.character_id,
    label: item.name,
  };
});

  
  return (
    <div>
      <FormCreateProducts categories={optionCategories} brands={optionBrands} series={optionSeries} characters={optionCharacters}/>
    </div>
  );
}
