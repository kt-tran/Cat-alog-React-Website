import { HandleGetList } from "./api";

export function RandomCat() {
    const { loading, list, error } = HandleGetList();
    let max = 66; //there are 67 breeds total
    let min = 0;

    let index = Math.floor(Math.random() * (max - min + 1) + min)
    return list[index];
}
