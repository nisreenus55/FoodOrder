import classes from './MealsSummary.module.css';

const MealsSummary = () => { 
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
            Choose your favorite meal and enjoy it.
          </p>
          <p>
            All our meals are cooked by experienced chefs!
          </p>
        </section>
    );
}

export default MealsSummary;