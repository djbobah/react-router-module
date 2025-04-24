import { Button } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SortControlsProps } from "../model/types";

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
    <Button
      onClick={handleSearchClick}
      rightSection={<IconArrowDown size={14} />}
    >{`Сортировка ${
      sort === "asc" ? "по возрастанию" : "по убыванию"
    }`}</Button>
  );
};
