import React from "react"
import './background-layout.css'

function BackgroundLayout({ children }) {

    return (
        <>
            <div className="container">
                <div className="wrapper" style={{ zIndex: 4 }}>
                    <div className="itemLeft item1">
                        <img className="img" src="https://tse4.mm.bing.net/th?id=OIP.0v0WSI9bszvLAmV1lus4-wHaDt&pid=Api&P=0&h=220" />
                    </div>
                    <div className="itemLeft item2">
                        <img className="img" src="https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHxmbG93ZXJ8ZW58MHx8fHwxNzI3MjUyNDk4fDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item3">
                        <img className="img" src="https://images.unsplash.com/photo-1625181067043-42eff3270801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHxib3l8ZW58MHx8fHwxNzI3MzMyMjk0fDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item4">
                        <img className="img" src="https://images.unsplash.com/photo-1623170909888-4e97ff277186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyMHx8Ym95fGVufDB8fHx8MTcyNzMzMjI5NHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item5">
                        <img className="img" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzI3MzMyNTUxfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item6">
                        <img className="img" src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHxvY2VhbnxlbnwwfHx8fDE3MjczMzI3MDN8MA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item7">
                        <img className="img" src="https://images.unsplash.com/photo-1651613543604-195861551d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHw2fHxoYXBweXxlbnwwfHx8fDE3MjczMzI4NTB8MA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item8">
                        <img className="img" src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxM3x8Y2FyfGVufDB8fHx8MTcyNzMzMjk4N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="itemRight item1">
                        <img className="img" src="https://images.unsplash.com/photo-1463674349210-38e4fa154dda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxMHx8Ym95fGVufDB8fHx8MTcyNzMzMjI5NHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item2">
                        <img className="img" src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHx8fHwxNzI3MzMyNTUxfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item3">
                        <img className="img" src="https://images.unsplash.com/photo-1488921618671-463b781ac428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHw4fHxvY2VhbnxlbnwwfHx8fDE3MjczMzI3MDN8MA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item4">
                        <img className="img" src="https://images.unsplash.com/photo-1542596594-649edbc13630?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyMHx8aGFwcHl8ZW58MHx8fHwxNzI3MzMyODUwfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item5">
                        <img className="img" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxOXx8Y2FyfGVufDB8fHx8MTcyNzMzMjk4N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item6">
                        <img className="img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHxjaXR5fGVufDB8fHx8MTcyNzMzMzE0MHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item7">
                        <img className="img" src="https://images.unsplash.com/photo-1492447166138-50c3889fccb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxNXx8cGVvcGxlfGVufDB8fHx8MTcyNzMzMzI2N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item8">
                        <img className="img" src="https://images.unsplash.com/photo-1553941884-f8947df6e0ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxfHx1bml8ZW58MHx8fHwxNzI3MzMzMzYzfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                </div>
                <div className="wrapper" style={{ zIndex: 4 }}>
                    <div className="itemLeft item1">
                        <img className="img" src="https://images.unsplash.com/photo-1511312255764-c14bac8cb35e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxOXx8Ym95fGVufDB8fHx8MTcyNzMzMjI5NHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item2">
                        <img className="img" src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxMnx8bmF0dXJlfGVufDB8fHx8MTcyNzMzMjU1MXww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item3">
                        <img className="img" src="https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxNXx8b2NlYW58ZW58MHx8fHwxNzI3MzMyNzAzfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item4">
                        <img className="img" src="https://images.unsplash.com/photo-1465145177017-c5b156cd4d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyM3x8aGFwcHl8ZW58MHx8fHwxNzI3MzMyODUwfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item5">
                        <img className="img" src="https://images.unsplash.com/photo-1526549928000-f98211febecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyM3x8Y2FyfGVufDB8fHx8MTcyNzMzMjk4N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item6">
                        <img className="img" src="https://images.unsplash.com/photo-1496871455396-14e56815f1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwzfHxjaXR5fGVufDB8fHx8MTcyNzMzMzE0MHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item7">
                        <img className="img" src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxOXx8cGVvcGxlfGVufDB8fHx8MTcyNzMzMzI2N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemLeft item8">
                        <img className="img" src="https://images.unsplash.com/photo-1542908371-3d8e22825a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxNHx8dW5pfGVufDB8fHx8MTcyNzMzMzM2M3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="itemRight item1">
                        <img className="img" src="https://images.unsplash.com/photo-1593183230686-69876b0cb240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwzMHx8Ym95fGVufDB8fHx8MTcyNzMzMjI5NHww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item2">
                        <img className="img" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxOXx8bmF0dXJlfGVufDB8fHx8MTcyNzMzMjU1MXww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item3">
                        <img className="img" src="https://images.unsplash.com/photo-1522092787785-60123fde65c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxOXx8b2NlYW58ZW58MHx8fHwxNzI3MzMyNzAzfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item4">
                        <img className="img" src="https://images.unsplash.com/photo-1443916568596-df5a58c445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyNXx8aGFwcHl8ZW58MHx8fHwxNzI3MzMyODUwfDA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item5">
                        <img className="img" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyOHx8Y2FyfGVufDB8fHx8MTcyNzMzMjk4N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item6">
                        <img className="img" src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwxMHx8Y2l0eXxlbnwwfHx8fDE3MjczMzMxNDB8MA&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item7">
                        <img className="img" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyNXx8cGVvcGxlfGVufDB8fHx8MTcyNzMzMzI2N3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                    <div className="itemRight item8">
                        <img className="img" src="https://images.unsplash.com/photo-1471874622662-3fe52245b2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NTM3Njd8MHwxfHNlYXJjaHwyNHx8dW5pfGVufDB8fHx8MTcyNzMzMzM2M3ww&ixlib=rb-4.0.3&q=80&w=400" />
                    </div>
                </div>
            </div>
            {children}
        </>

    )
}

export { BackgroundLayout }