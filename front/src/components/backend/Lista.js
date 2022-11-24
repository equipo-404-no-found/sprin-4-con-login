import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import estilos from "./estilos.css";
import { getProductos } from "../../api/apiProductos.js";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

// const data = [
//   { id: 1, title: "el coronel no tiene quien lo escriba", price:406,category:"LITERATURA",cantidad: 1 },
//   { id: 2, title: "el amor en los tiempos del colera", price:406,category:"LITERATURA",cantidad: 1 },
//   {id: 3, title: "cien años de soledad", price:406,category:"LITERATURA",cantidad: 1 },
//   { id: 4, title: "don quijote de la mancha", price:406,category:"LITERATURA",cantidad: 1 },
//   {id: 5, title: "Harry potter (Y la camara secreta)", price:406,category:"LITERATURA",cantidad: 1},
//   {id: 6, title: "la cenicienta", price:406,category:"LITERATURA",cantidad: 1},
//   {id: 7, title: "El poder de las olas", price:406,category:"LITERATURA",cantidad: 1},
//   {id: 8, title: "El poder de creer en ti", price:406,category:"LITERATURA",cantidad: 1},
//   {id: 9, title: "Querido yo", price:406,category:"LITERATURA",cantidad: 1},
// ];

class admin extends React.Component {

  state = {
    data:[],

    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: 0,
      isbn: "",
      title: "",
      price: "",
      image: "",
      category: "",
      cantidad: ""

    },
  };
  componentDidUpdate(){
    try{
  
      const getdata = async ()=>{
          const data = await getProductos();
          this.setState({data:data});
      }

      getdata()
      console.log("dattos ",this.form)
  }catch(error){

      console.log("ups a ocurrido uun error",error)

  }

  }
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
      
    });
   
  };


  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].id = dato.id;
        arreglo[contador].title = dato.title;
        arreglo[contador].price = dato.price;
        arreglo[contador].image = dato.image;
        arreglo[contador].category = dato.category;
        arreglo[contador].cantidad = dato.cantidad;
        
      }
      contador++;
    });
     //console.log("data ",arreglo);
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>

          <Table className="tabla">
            <div className="cuadrado">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>IMAGE</th>
                <th>CATEGORY</th>
                <th>CANTIDAD</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.title}</td>
                  <td>{dato.price}</td>
                  <td>{dato.image}</td>
                  <td>{dato.category}</td>
                  <td>{dato.cantidad}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <br>
                    </br>
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          </div>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                title:
              </label>
              <input
                className="form-control"
                name="title"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.title}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              price: 
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </FormGroup>

            <FormGroup>
              <label>
              image: 
              </label>
              <input
                className="form-control"
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.image}
              />
            </FormGroup>
            <FormGroup>
              <label>
              category: 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.category}
              />
            </FormGroup>
            <FormGroup>
              <label>
              cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Libro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                title: 
              </label>
              <input
                className="form-control"
                name="title"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              price: 
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              image: 
              </label>
              <input
                className="form-control"
                name="image"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
              category 
              </label>
              <input
                className="form-control"
                name="category"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
              cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Button color="success" onClick={()=>this.cerrarModalInsertar()}>Mostrar base de datos</Button>
      </>
    );
  }
}
export default admin;
