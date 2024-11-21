import React from 'react'

const PageNumber = ({ products, page, setPage }) => {
    console.log(products?.products?.length
    )

    const selectedPage = (selected) => {
        if (selected >= 1 &&
            selected <= products?.products?.length / 10 &&
            selected !== page
        )
            setPage(selected)
    }
    return (
        <div>
            {products?.products?.length > 0 && (
                <div>
                    <span onClick={() => selectedPage(page - 1)}>◀️</span>
                    {[...Array(products?.products?.length / 10)].map((_, i) =>
                    (<span className={page == i + 1 ? "m-2 bg-green-400" : "m-2 border"} onClick={() => selectedPage(i + 1)}>{i + 1}</span>
                    ))}
                    <span onClick={() => selectedPage(page + 1)}>▶️</span>
                </div>
            )}
        </div>
    )
}

export default PageNumber
