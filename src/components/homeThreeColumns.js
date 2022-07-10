import React from "react";

const HomeThreeColumns = () => {
    return (
        <section className="threeColumns">
            <div className="threeColumns_column column_bags">
                <h1>10</h1>
                <h2>Oddanych worków</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns_column column_org">
                <h1>5</h1>
                <h2>Wspartych orgzanizacji</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className="threeColumns_column column_collect">
                <h1>7</h1>
                <h2>Zorganizowanych zbiórek</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </section>
    )
}

export default HomeThreeColumns;