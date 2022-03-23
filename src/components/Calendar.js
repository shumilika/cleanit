import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import style from '../css.modules/calendar.module.css'
const Calendar = () => {
    return (
        <div>
           <p> Choose available dates:</p>


            <div className={style.planner}>

                <div className={` ${style.calendar}`}>
                    <div>

                        <span className={style.month}>March 2021</span>
                    </div>
                    <div className={'d-flex justify-content-between'}>
                    <button className={`btn btn-primary btn-lg p-3 ${style.btnBlue}`}>
				<i className={`material-icons ${style.icons}`}>chevron_left</i>
                        </button>



                        <table className={'p-3'}>
                            <thead>
                            <tr className={style.week}>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>T</th>
                                <th>F</th>
                                <th>S</th>
                                <th>S</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><span>30</span></td>
                                <td><span>1</span></td>
                                <td><span className="active">2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><span>6</span></td>
                            </tr>
                            <tr>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span className="active">9</span></td>
                                <td><span>10</span></td>
                                <td><span>11</span></td>
                                <td><span>12</span></td>
                                <td><span>13</span></td>
                            </tr>
                            <tr>
                                <td><span className="active">14</span></td>
                                <td><span>15</span></td>
                                <td><span>16</span></td>
                                <td><span>17</span></td>
                                <td><span className="active">18</span></td>
                                <td><span>19</span></td>
                                <td><span>20</span></td>
                            </tr>
                            <tr>
                                <td><span>21</span></td>
                                <td><span>22</span></td>
                                <td><span>23</span></td>
                                <td><span>24</span></td>
                                <td><span>25</span></td>
                                <td><span>27</span></td>
                                <td><span>27</span></td>
                            </tr>
                            <tr>
                                <td><span>28</span></td>
                                <td><span>29</span></td>
                                <td><span>31</span></td>
                                <td><span>1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                                <td><span>4</span></td>
                            </tr>
                            </tbody>

                        </table>

                    <button className={`btn btn-primary btn-lg p-3 ${style.btnBlue}`}>
				<i className={`material-icons ${style.icons}`}>chevron_right</i>
			</button>
                </div>
                </div>

        </div>

        </div>


    );
};

export default Calendar;