import React from "react";

function PolicyTable(probs) {
    return (
        <div>
            <h2>{probs.heading}</h2>
            <p style={{ fontStyle: 'italic' }}>{probs.term}</p>
            <h3>{probs.subheading}</h3>
            <table>
                <thead>
                    <tr>
                        <th>السلعة</th>
                        <th>التوضيح</th>
                    </tr>
                </thead>
                <tbody>{probs.table}</tbody>
            </table>

        </div>
    );
}

export default PolicyTable;
