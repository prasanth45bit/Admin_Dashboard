import './Admin.css';
import Leftside from './Side';
import PieChart from './Chart';
import AccessibleTable from './table';

function Admin() {
    return (
        <div>
            <Leftside />
            <div className="dmain">
                <div className="fmain">
                    <div className='flexcon'>
                        <div ><h3>ADMIN DASHBOARD</h3></div>
                    </div>
                    <div className='flexcon'>
                        <div class="pc">
                            <div class="c" >
                                <div className="icon"></div>
                                <div className="text">80%</div>
                                <div className="text1">Employees</div>
                                <div className="text1">Working Today</div>
                            </div>
                            <p className='cp'></p>
                        </div>
                        <div class="pc">
                            <div class="c">
                                <div className="icon"></div>
                                <div className="text">7</div>
                                <div className="text1">Uncategorized</div>
                                <div className="text1">Working Today</div>
                            </div>
                            <p className='cp'></p>
                        </div>
                        <div class="pc">
                            <div class="c">
                                <div className="icon"></div>
                                <div className="text">80%</div>
                                <div className="text1">Employees</div>
                                <div className="text1">Working Today</div>
                            </div>
                            <p className='cp'></p>
                        </div>
                        <div class="pc">
                            <div class="c">
                                <div className="icon"></div>
                                <div className="text">3,299.99</div>
                                <div className="text1">Employees</div>
                                <div className="text1">Working Today</div>
                            </div>
                            <p className='cp'></p>
                        </div>
                    </div>yyyyy
                    <div className='na'><h3>INCOME CHART</h3></div>
                    <div className='flexcontainer'>
                        <div class="ck">
                            <p className='chartback'><AccessibleTable/></p>
                        </div>
                    </div>
                </div>
                <div className='fmain'>
                    <div className='na'><h3>PAYMENT DETAILS</h3></div>
                    <div class="end">
                        <div class="c">
                            <div>Payment ID: 123456</div>
                            <div>Amount: $500</div>
                            <div>Date: 2024-05-10</div>
                            <div>Status: Completed</div>
                        </div>
                        <div class="c">
                            <div>Payment ID: 123456</div>
                            <div>Amount: $500</div>
                            <div>Date: 2024-05-10</div>
                            <div>Status: Completed</div>
                        </div>
                        <div class="c">
                            <div>Payment ID: 123456</div>
                            <div>Amount: $500</div>
                            <div>Date: 2024-05-10</div>
                            <div>Status: Completed</div>
                        </div>
                        <div class="c">
                            <div>Payment ID: 123456</div>
                            <div>Amount: $500</div>
                            <div>Date: 2024-05-10</div>
                            <div>Status: Completed</div>
                        </div>
                        <div class="c">
                            <div>Payment ID: 123456</div>
                            <div>Amount: $500</div>
                            <div>Date: 2024-05-10</div>
                            <div>Status: Completed</div>
                        </div>
                        
                        <p className='cp'></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
