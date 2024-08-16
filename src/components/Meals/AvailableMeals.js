import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Spicy Chicken Sandwitch',
      description: 'The Spicy Crispy Chicken sandwich has 530 calories.',
      price: 6.99,
    },
    {
      id: 'm2',
      name: 'Burger',
      description: ' There are 550 calories in a Burger!',
      price: 10.5,
    },
    {
      id: 'm3',
      name: 'Fries',
      description: 'There are 220 calories in a small fries.',
      price: 1.99,
    },
    {
      id: 'm4',
      name: 'Iced Coffee',
      description: 'There are 140 calories in a small McCafé Iced Coffee',
      price: 4.99,
    },
  ];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
          key={meal.id}
          id={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />);
    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
};

export default AvailableMeals;
