import {Injectable} from "@angular/core";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import {IProduct} from "./product";

@Injectable({
  providedIn: "root"
})
export class PdfGeneratorService {

  generatePDF(filterBy: string, filteredProducts: IProduct[]) {
    const documentDefinition = {
      content: [
        `Results for search term: '${filterBy}'\n\n`,
        {
          table: {
            headerRows: 1,
            widths: ["auto", "auto", "auto", "auto"],
            body: [
              ["Code", "Product", "Price", "Tax"],
              ...filteredProducts.map((product) => [
                product.itemNumber,
                product.itemName,
                product.netPrice,
                product.tax,
              ]),
            ],
          },
        },
      ],
    };

    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  }
}
