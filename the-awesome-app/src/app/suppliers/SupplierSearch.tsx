'use client'

import { Suspense, useState } from "react"
import SupplierResultsView from "./SupplierResultsView";

export default function SupplierSearch(){

    const [searchQuery, setSearchQuery] = useState("");
    const [query, setQuery] = useState("");


    return (
        <div>
            <div>
                <input className="form-control" type="search" placeholder="Search Suppliers" 
                        value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={() => setQuery(searchQuery)}>Search</button>
            </div>

            {searchQuery ? <div className="alert alert-info">
                Search results for {searchQuery}
            </div>: null}

            <div>
                <Suspense fallback={<div className="alert alert-primary">Loading results...</div>}>
                    <SupplierResultsView query={query}/>
                </Suspense>
            </div>
        </div>
    )
}