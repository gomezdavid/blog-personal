import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function MicroservicesPost() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12">
            <div className="container max-w-3xl px-4">
                <Link href="/" passHref>
                    <Button variant="outline" className="mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Understanding Microservices Architecture</CardTitle>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 15, 2023</p>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                        <h2>Have You Heard About Them?</h2>

                        <p>In this post, you'll finally understand what microservices are and how they’re used — explained simply to avoid confusion.</p>


                        <p>Imagine you want to build a new Mercado Libre. You hire developers and realize you need multiple modules: search, posting, product creation and deletion, user registration, payment methods, and so on.</p>

                        <p> This is where <strong>microservices</strong> come in. It’s a software architecture that lets us split a system into independent, self-contained services.</p>

                        <p>Each microservice focuses on a specific functionality and communicates with others through interfaces (often REST APIs, messaging, or queues). The best part? Each service can be written in different languages.</p>

                        <h3>Example Microservices:</h3>

                        <h4>1. Product Catalog Microservice</h4>
                        <ul>
                            <li><strong>Function:</strong> Manages product listings, prices, images, and categories.</li>
                            <li><strong>API:</strong> Provides endpoints to list, search by category, or find products by name.</li>
                        </ul>

                        <h4>2. Shopping Cart Management Microservice</h4>
                        <ul>
                            <li><strong>Function:</strong> Manages user shopping carts, allowing adding/removing products, viewing contents.</li>
                            <li><strong>API:</strong> Provides endpoints to add, view, or remove products from the cart.</li>
                            <li><strong>Independence:</strong> Operates independently from the product catalog but connects to it for product details.</li>
                        </ul>

                        <h4>3. Payment Processing Microservice</h4>
                        <ul>
                            <li><strong>Function:</strong> Manages transactions when a user completes a purchase.</li>
                            <li><strong>API:</strong> Provides endpoints to start a transaction, check payment status, and handle refunds.</li>
                            <li><strong>Independence:</strong> Supports different payment providers (e.g., PayPal, credit cards) without changing other services.</li>
                        </ul>

                        <h4>4. Shipping Microservice</h4>
                        <ul>
                            <li><strong>Function:</strong> Manages shipping costs, package tracking, and logistics.</li>
                            <li><strong>API:</strong> Provides endpoints for calculating shipping costs.</li>
                            <li><strong>Independence:</strong> Operates independently but can scale during high-demand times like Black Friday.</li>
                        </ul>

                        <h3>Interaction Flow:</h3>
                        <p>A user logs in via the User Management Microservice, browses the Product Catalog, adds items to their cart, completes the purchase through Payment Processing, and shipping costs/logistics are managed by the Shipping Microservice.</p>
                        <p>This setup allows us to add and scale features as needed, keeping each module self-contained and adaptable.</p>

                    </CardContent>
                </Card>
            </div>
        </div >
    )
}