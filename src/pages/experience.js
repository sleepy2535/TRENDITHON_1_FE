const SelectBox = (props) => {
    return (
        <select>
            {props.options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    placeholder={option.category}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};
function exList() {
    //분야 카테고리
    const optionField = [
        { value: 1.1, name: "래저, 액티비티", category: "분야" },
        { value: 1.2, name: "관광", category: "분야" },
        { value: 1.3, name: "기타", category: "분야" },
    ];
    //지역 카테고리
    const optionCountry = [
        { value: 2.1, name: "국내", category: "지역" },
        { value: 2.2, name: "해외", category: "지역" },
    ];
    //정렬 카테고리
    const optionSort = [
        { value: 3.1, name: "최신순", category: "정렬" },
        { value: 3.2, name: "조회순", category: "정렬" },
    ];
    return (
        <div>
            <SelectBox option={optionField}></SelectBox>
            <SelectBox option={optionCountry}></SelectBox>
            <SelectBox option={optionSort}></SelectBox>
            <list></list>
        </div>
    );
}

function Experience() {
    return (
        <div>
            <header></header>
            <main>
                <adPhoto></adPhoto>
                <exList></exList>
                "dkjflad"
            </main>
            <footer></footer>
        </div>
    );
}
export default Experience;
