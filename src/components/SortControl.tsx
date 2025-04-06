import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type SortControlsProps = {
  sort: "asc" | "desc";
  setSort: (value: "asc" | "desc") => void;
};

export const SortControl = (props: SortControlsProps) => {
  const { sort, setSort } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ sort: sort });
  }, [sort, searchParams, setSearchParams]);

  const handleSearchClick = () => {
    setSort(sort === "asc" ? "desc" : "asc");
  };
  return (
    <div>
      <button onClick={handleSearchClick}>{`Сортировка ${
        sort === "asc" ? "по возрастанию" : "по убыванию"
      }`}</button>
    </div>
  );
};
