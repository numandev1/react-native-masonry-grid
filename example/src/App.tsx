import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import MasonryFlatlist from 'react-native-masonry-grid';
import Card from './component/Card';

const DATA = [
  {
    name: 'Coffee Now!',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/eac92236-0e4f-466a-9bc2-e68a04bb96ad_NowCoffeeNew.png',
    height: 136,
    id: '211',
  },
  {
    name: 'Fruits & vegetables',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/4fa903f6-8de2-42fe-b0a0-d69a6c6aed05_Fruitsvegetables.png',
    height: 136,
    id: '11',
  },
  {
    name: 'Snacks & Candy',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/31f8537a-dd16-460d-a13a-7753cbcef288_snakscancy.png',
    height: 280,
    id: '1',
  },
  {
    name: 'Beverages & Drinks',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/c5a9e597-d511-4581-a97e-377a1af7d1ae_BeveragesDrinks.png',
    height: 136,
    id: '6',
  },
  {
    name: 'Dairy & Eggs',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/e2f02d7d-ca52-4482-a85f-ec1ddbeb1f92_DairyEggs.png',
    height: 280,
    id: '8',
  },
  {
    name: 'Milk & Laban',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/8e8bac9b-38e4-437b-8b81-77449a2403ce_MilkLaban.png',
    height: 136,
    id: '5',
  },
  {
    name: 'Ice Cream',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/cf85db2f-dd1a-4feb-b380-2b5583985523_ice-cream.png',
    height: 280,
    id: '2',
  },
  {
    name: 'Bakery',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/983ba625-85bb-49ec-afde-88d276e2b5ed_Bakery.png',
    height: 136,
    id: '7',
  },
  {
    name: 'Fresh Poultry & Meat',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/e3e39b42-7c25-4e16-89c3-fc4322cffaff_FreshPoultryMeat.png',
    height: 136,
    id: '15',
  },
  {
    name: 'For your guests',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/236586b5-183b-4cdc-a0fc-7e9bf6fe9700_eidcategory_Eidcategory.png',
    height: 136,
    id: '221',
  },
  {
    name: 'Canned food',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/6a47741a-d3a8-42fe-b4dc-88373c97a16e_cannedfood.png',
    height: 136,
    id: '13',
  },
  {
    name: 'Water & Ice',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/980e8f60-4cf9-4bea-a941-b7a6859250d1_WaterIce.png',
    height: 136,
    id: '3',
  },
  {
    name: 'Coffee & Tea',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/06b262ca-bef4-43c8-8ca3-ef52bb6f0135_CoffeeTea.png',
    height: 280,
    id: '17',
  },
  {
    name: 'Condiments',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/6287f181-9819-4efb-9dcb-a19f75873d07_Condiments.png',
    height: 280,
    id: '16',
  },
  {
    name: 'Ready to Eat',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/64f45280-b836-44ac-bf0c-0d740907e11e_Readytoeat.png',
    height: 136,
    id: '26',
  },
  {
    name: 'Pet Supplies',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/228d9fc3-a562-4466-ad40-918e6780d021_PetSupplies.png',
    height: 136,
    id: '25',
  },
  {
    name: 'Disposables',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/bb3860c5-9232-40e0-882d-4ad32d67044e_Disposables.png',
    height: 280,
    id: '24',
  },
  {
    name: 'Baby Products',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/c74e261e-066c-4b55-bc17-5ec5dc2ea621_Baby.png',
    height: 136,
    id: '23',
  },
  {
    name: 'Household essentials',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/df65739a-ccbf-4acf-8aa1-cc99a8a7b4f4_Householdessentials.png',
    height: 136,
    id: '22',
  },
  {
    name: 'Pharmacy',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/76fda727-634c-4f0d-be16-84069177e8f2_Pharmacy.png',
    height: 136,
    id: '21',
  },
  {
    name: 'Beauty and Personal Care',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/1ff6d157-98f2-421f-b00b-00b59cde02b5_BeautyandPersonalCare.png',
    height: 136,
    id: '20',
  },
  {
    name: 'Cleaning and Laundry',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/ecb6ba83-ef06-4e58-8a05-03cc45f737e6_CleaningandLaundry.png',
    height: 136,
    id: '19',
  },
  {
    name: 'Frozen Food',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/43849a44-f9e2-4010-a3d5-5bc813d7708a_Frozenfood.png',
    height: 136,
    id: '14',
  },
  {
    name: 'Healthy Destination',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/392127a1-5150-47ec-bac9-98b59e4f22bf_Organic.png',
    height: 136,
    id: '12',
  },
  {
    name: 'Breakfast',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/5bc0c75c-de40-4b8f-a678-20916cb6bb5b_Breakfast.png',
    height: 136,
    id: '10',
  },
  {
    name: 'Cooking & Baking',
    url: 'https://mp-staging-ix.onshobbak.net/media/ninja-catalog-42/b58b1a50-2dad-4db1-b744-921dd4efc120_CookingBaking.png',
    height: 136,
    id: '9',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <MasonryFlatlist
        data={DATA}
        numColumns={4}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        style={styles.masonryFlatlist}
        renderItem={({ item, index }) => {
          return <Card data={item} height={item.height} onPress={() => {}} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 32,
  },
  columnWrapperStyle: {
    marginTop: 8,
  },
  masonryFlatlist: {
    marginTop: 8,
  },
});
