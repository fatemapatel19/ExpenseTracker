import { Group, Select } from "@mantine/core";
import React, { useEffect } from "react";
import { DatePicker, } from "@mantine/dates";
import { useState } from "react";

function Filters({ setFilters, filters }) {
    const [value, setValue] = useState();

    return (
        <Group>
            <Select
                label="Select Frequency"
                placeholder="Select Frequency"
                data={[
                    { label: "Last Week", value: "7" },
                    { label: "Last Month", value: "30" },
                    { label: "Last Year", value: "365" },
                    { label: "Custom Range", value: "custom-range" },
                ]}
                value={filters.frequency}
                onChange={(value) => setFilters({ ...filters, frequency: value })}
                name="frequency"
            />
            {filters.frequency === "custom-range" && (
                <div className="w-full">
                    <Group position="center">
                        <DatePicker 
                            type="range" 
                            value={value} 
                            onChange={setValue}
                            zIndex={10000}
                            dropdownPosition="bottom"
                            fullWidth
                        />
                    </Group>
                </div>
            )}
            <Select
                label="Select Type"
                placeholder="Select Type"
                data={[
                    { label: "All", value: "" },
                    { label: "Income", value: "income" },
                    { label: "Expense", value: "expense" },
                ]}
                value={filters.type}
                onChange={(value) => setFilters({ ...filters, type: value })}
                name="type"
                dropdownPosition="bottom"
            />
        </Group>
    );
}

export default Filters;
