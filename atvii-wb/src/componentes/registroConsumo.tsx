import { Component } from "react";

type props = {
    tema: string
}

export default class RegistroConsumo extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cliente_id" type="text" className="validate" />
                            <label htmlFor="cliente_id">ID do Cliente</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="produto_id" type="text" className="validate" />
                            <label htmlFor="produto_id">ID do Produto/Serviço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="quantidade" type="text" className="validate" />
                            <label htmlFor="quantidade">Quantidade</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_consumo" type="text" className="validate" />
                            <label htmlFor="data_consumo">Data de Consumo</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
