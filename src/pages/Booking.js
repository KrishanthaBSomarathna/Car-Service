import React from 'react';

class Booking extends React.Component {
  state = {
    name: '',
    phone: '',
    service: '',
    date: '',
    request: '',
    status:'',
    submissionStatus: null,
  };
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, service, date, request,status } = this.state;

    const newBooking = {
      name,
      phone,
      service,
      date,
      request,
      status:'Pending',
    };

    try {
      const response = await fetch('http://localhost:8080/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });

      if (response.ok) {
        this.setState({
          name: '',
          phone: '',
          service: '',
          date: '',
          request: '',
          submissionStatus: 'success',
        });
      } else {
        console.error('Booking failed.');
        this.setState({ submissionStatus: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      this.setState({ submissionStatus: 'error' });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row gx-5">
          <div
            className="bg-danger h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
            data-wow-delay="0.6s"
          >
            <h1 className="text-white mb-4">Book For A Service</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: '55px' }}
                    required
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Phone"
                    style={{ height: '55px' }}
                    required
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: '55px' }}
                    required
                    name="service"
                    value={this.state.service}
                    onChange={this.handleChange}
                  >
                    <option selected>Select A Service</option>
                    <option value="1">Periodic Maintenance</option>
                    <option value="2">Paints & Repairs</option>
                    <option value="3">Terminal Services</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <div
                    className="date"
                    id="date1"
                    data-target-input="nearest"
                  >
                    <input
                      type="date"
                      className="form-control border-0 datetimepicker-input"
                      placeholder="Service Date"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                      style={{ height: '55px' }}
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                <textarea
                  className="form-control border-0"
                  placeholder="Place Message Here"
                  name="request"
                  value={this.state.request}
                  onChange={this.handleChange}
                  style={{ height: '200px', width: '100%' }} // Adjust the height and width as needed
                ></textarea>

                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>

            {/* Display success message */}
            {this.state.submissionStatus === 'success' && (
              <h2 className=" mt-3">
                Your request is pending. We will contact you soon!
              </h2>
            )}

            {/* Display error message */}
            {this.state.submissionStatus === 'error' && (
              <p className=" mt-3">Booking failed. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
