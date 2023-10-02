import HourlyCard from "./HourlyCard";
import dataInCard from "./mockdata" 

const SearchResultCardHolder = () => {
  return (
    <div className="search-result">
      {dataInCard.map((eachCard) => (
        <HourlyCard
          key={
            eachCard.datePart +
            "_" +
            eachCard.hourpart +
            "_" +
            eachCard.costType
          }
          overSpendDataRow={eachCard}
        />
      ))}
    </div>
  );
};

export default SearchResultCardHolder;
