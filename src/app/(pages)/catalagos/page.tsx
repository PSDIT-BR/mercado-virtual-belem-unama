import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-10">
      <h1 className="font-medium text-4xl">Produtos</h1>
      <p className="text-lg">Listagem de produtos</p>
      <div className="space-y-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card className="w-full" key={index}>
              <CardHeader>
                <CardTitle>Estação das Docas</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Image
                    src="/img-card.jpeg"
                    alt="card"
                    className="rounded-md"
                    width={500}
                    height={200}
                  />

                  <span className="flex gap-2 mt-2">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="rounded-full w-3 h-3 bg-green-500"
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm font-medium">5.323 avaliações</p>
                  </span>

                  <p className="text-sm w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <h2 className="mt-2 text-lg text-red-700 text-center font-medium">
                    R$ 100,00
                  </h2>
                  <p className="text-sm text-center">Até 5x de <strong>R$25,00</strong> sem juros</p>

                  <CardDescription className="mt-4">
                    A Estação das Docas é um complexo turístico, gastronômico e
                    cultural localizado em Belém, capital do estado do Pará,
                    Brasil.
                  </CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
