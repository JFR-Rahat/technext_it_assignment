import { useState, useEffect } from 'react';


export const Sort = (users, sortCategory, setSortCategory) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        users && users.map((user) => {
            const sortArray = type => {
                const types = {
                    sort_by_name: user?.firstName,
                    sort_by_email: user?.email,
                    sort_by_company_name: user?.company
                };
                const sortProperty = types[type];
                const sorted = [...users].sort((a, b) => {
                    if (sortProperty === user?.company) {
                        if (a.company.name) return a.company.name.localeCompare(b.company.name);
                        else return a.company.localeCompare(b.company?.name);
                    }
                    else if (sortProperty === user?.firstName) {
                        return a.firstName.localeCompare(b.firstName);
                    }
                    else {
                        return a.email.localeCompare(b.email);
                    }
                });
                setData(sorted);
            };

            sortArray(sortCategory);
        }
        )
    }, [users, sortCategory]);
    return { data, setSortCategory };
}
