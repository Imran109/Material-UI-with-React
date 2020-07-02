import React from "react"

export default class BasicForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      description: '',
      image: '',
      color: '',
      size: '',
      nameError: '',
      priceError: '',
      descriptionError:'',
      imageError: '',
      colorError: '',
      sizeError:'',
      selectedFile: null,
      handleResponse: null, 
      imageUrl: null,
      invalidImage: null,
      newSize: '' 
    };
    this.reader = new FileReader();

  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      this.validateName();
    });
  };


  handlePriceChange = event => {
    this.setState({ price: event.target.value }, () => {
      this.validatePrice();
    });
  };


  handleDescriptionChange = event => {
    this.setState({ description: event.target.value }, () => {
      this.validateDescription();
    });
  };

  handleImageChange = event => {
    this.setState({ image: event}, () => {
      this.validateImage();
    });
  };

  handleColorChange = event =>{
    this.setState({color:event.target.value} , () => {
      this.validateColor();
    })
  }

handleSizeChange = event =>{
  this.setState({size:event.target.value} , () => {
    this.validateSize();
  })
}

  validateName = () => {
    const { name } = this.state;
    let regEx = new RegExp("KS[a-zA-Z]{4}[0-9]{4}[a-zA-Z]{2}")
    this.setState({
      nameError:  name.match(regEx) ? null : 'Product name must be in proper format [KS-xxxx-00000-xx] '
    });
  }

  validatePrice = () => {
    const { price } = this.state;
    this.setState({
      priceError:
        price >= 100 && price <= 10000 ? null : 'Price must be between 100 and 10000'
    });
  }

  validateDescription = () => {
    const { description } = this.state;
    let descpregEx = new RegExp("^[a-zA-Z0-9]{4,25}$")
    this.setState({
      descriptionError:
        description.match(descpregEx) ? null : 'Not a valid description'
    });
  }

  validateImage = () => {
    const { image } = this.state;
    this.setState({
      imageError: null
    });
  }

  validateColor = () =>{
    this.setState({
      colorError:null
    });
  }

  validateSize = () => {
    this.setState({
      sizeError:null
    })
  }


  // Image Validation Section
  onChangeFile = event => {
    const imageFile = event.target.files[0];
    this.handleImageChange(imageFile.name)

 
    if (!imageFile) {
      this.setState({ invalidImage: 'Please select image.' });
      return false;
    }
 
    if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
      this.setState({ invalidImage: 'Please select valid image.' });
      return false;
    }
 
    this.reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.setState({ selectedFile: imageFile, invalidImage: null });
      };
      img.onerror = () => {
        this.setState({ invalidImage: 'Invalid image content. (maxsize : 5 MB / Image)' });
        return false;
      };
      debugger
      img.src = e.target.result;
    };
    this.reader.readAsDataURL(imageFile);
  }
 
 


  handleSubmit = event => {
    event.preventDefault();
    const { name, price , description , image , color} = this.state;
    alert(`Entered Products Information: \n 
            name: ${name} \n 
            price: ${price} \n
            description: ${description} \n
            colour: ${color} \n
            image: ${image}
            `);
  };
  

  render() {
    const { handleResponse, invalidImage } = this.state;
    return (
      <div className = "wrapper">
        <div class="title">
          <h1>Add New Product</h1>
        </div>
        <div className = "contact-form">
          <div className = "input-fields">
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'></label>
                <input
                  name='name'
                  className = {`form-control input ${this.state.nameError ? 'is-invalid': ''}`}
                  id='name'
                  placeholder='Enter name'
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  onBlur={this.validateName}
                />
                <div className='invalid-feedback'>{this.state.nameError}</div>
              </div>



              <div className='form-group'>
                <label htmlFor='price'></label>
                <input
                  name='price'
                  className={`form-control input ${this.state.priceError ? 'is-invalid' : ''}`}
                  id='price'
                  placeholder='Enter Price'
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  onBlur={this.validatePrice}
                />
                <div className='invalid-feedback'>{this.state.priceError}</div>
              </div>


              <div className = "sizes">
                
                <div className = "XS">
                <input className = "cb1" type="checkbox" id="XS" name="XS" value="XS" onChange = {this.handleSizeChange.bind(this)}></input>
                <label for="vehicle1"> XS </label>
                </div>

                <div className = "S">
                <input className = "cb2" type="checkbox" id="S" name="S" value="S" onChange = {this.handleSizeChange.bind(this)}></input>
                <label for="vehicle2"> S </label>
                </div>

                <div className = "M">
                <input className = "cb3" type="checkbox" id="M" name="M" value="M" onChange = {this.handleSizeChange.bind(this)}></input>
                <label for="vehicle3"> M </label>
                </div>

                <div className = "L">
                <input className = "cb4"type="checkbox" id="L" name="L" value="L" onChange = {this.handleSizeChange.bind(this)}></input>
                <label for="vehicle3"> L </label>
                </div>

                <div className = "XL">
                <input className = "cb5"type="checkbox" id="XL" name="XL" value="XL" onChange = {this.handleSizeChange.bind(this)}></input>
                <label for="vehicle3"> XL </label>
                </div>
              </div>


              <div className='form-group'>
                <label htmlFor='description'></label>
                <textarea
                  name='description'
                  className={`form-control input ${this.state.descriptionError ? 'is-invalid' : ''}`}
                  id='description'
                  placeholder='Description'
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  onBlur={this.validateDescription}
                />
                <div className='invalid-feedback'>{this.state.descriptionError}</div>
              </div>



              <div className = "form-group color-checkbox">
                <label htmlFor = "color" className = "color-choose">Choose Colour</label>
                <select name = "color" id = "color" className = "select-color" required defaultValue = {this.state.selectValue} onChange = {this.handleColorChange}>
                  <optgroup label = "Red">
                    <option value = "red-023">Red 023</option>
                    <option value = "red-025">Red 025</option>
                  </optgroup>
                  <optgroup label = "Blue">
                    <option value = "blue-013">Blue 013</option>
                    <option value = "blue-075">Blue 075</option>
                  </optgroup>
                  <optgroup label = "Purple">
                    <option value = "purple-083">Purple 083</option>
                    <option value = "purple-095">Purple 095</option>
                  </optgroup>
                </select>
              </div>


              <div className='form-group'>
              <div className="App" >
                <p className="title">Upload Images</p>
                <div style={{ marginBottom: 10 }}>
                  <input type="file" onChange={this.onChangeFile} multiple/>
                </div>
                {invalidImage && <p className="error">{invalidImage}</p>}
                {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}
              </div>
              </div>


              <button type='submit' className='btn btn-success btn-block'>
                Submit
              </button>


            </form>
      </div>
    </div>
  </div>
    );
  }
}