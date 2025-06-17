import { useNavigate } from 'react-router-dom';
import screen from '../assets/react.svg'
import { useState } from 'react';

function SeatSelection() {
    const navigate = useNavigate();
    const totalRows = 15;
    const seatsPerRow = 25;

    const generateSeats = () => {
        const rows = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let seats = [];
        for (let i = 0; i < totalRows; i++) {
            for (let j = 1; j <= seatsPerRow; j++) {
                seats.push(` ${rows[i]}${j}`);
            }
        }
        return seats;
    };

    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (seat) => {
        setSelectedSeats((prevSelected) =>
            prevSelected.includes(seat)
                ? prevSelected.filter((s) => s !== seat)
                : [...prevSelected, seat]
        );
    };

    const seats = generateSeats();

    function handleBook() {
        if(selectedSeats.length===0){
            alert('please select at least one seat before booking. ')
            return;
        }
        alert(`you have successfully booked your seats. \nSeat numbers: ${selectedSeats}`);
        navigate('/');
    }

return (
    <div className='container-md container-fluid-sm' style={{ padding: '1rem' }}>
        <h1 className="mt-3 text-center text-primary">Select Your Seats</h1>
        <div className='d-flex justify-content-end mt-5' style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className='btn btn-outline-info text-black container-sm' onClick={handleBook} >Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'  }
                <span className='mx-5 text-primary'>click to confirm seats>></span>
            </button>
        </div>

        <div
            className="seat-grid"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)`,
                gap: '6px',
                maxWidth: '100%',
                overflowX: 'auto',
                margin: '20px auto',
            }}
        >
            {seats.map((seat) => (
                <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        backgroundColor: selectedSeats.includes(seat) ? '#ccc' : '#ffff',
                        color: '#00b8f5',
                        border: '1px solid #00b8f5',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                    }}
                >
                    {seat}
                </button>
            ))}
        </div>
        <div className='d-flex justify-content-center mt-5'>
            <img src={screen} alt="screen this way" />
        </div>
    </div>

);
}

export default SeatSelection;
