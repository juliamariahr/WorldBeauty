import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="produto_nome" type="text" className="validate" />
                            <label htmlFor="produto_nome">Nome do Produto/Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="produto_preco" type="text" className="validate" />
                            <label htmlFor="produto_preco">Preço</label>
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
