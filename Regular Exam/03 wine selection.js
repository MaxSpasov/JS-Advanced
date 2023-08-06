class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error("Not enough space in the cellar.");
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false,
        });

        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wineIndex = this.wines.findIndex(
            (wine) => wine.wineName === wineName
        );
        if (wineIndex === -1) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (this.wines[wineIndex].paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        this.wines[wineIndex].paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wineIndex = this.wines.findIndex(
            (wine) => wine.wineName === wineName
        );
        if (wineIndex === -1) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (!this.wines[wineIndex].paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(wineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        let winesToPrint = [];
        let message = "";

        if (wineType) {
            winesToPrint = this.wines.filter((wine) => wine.wineType === wineType);
            if (winesToPrint.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        } else {
            winesToPrint = [...this.wines];
        }

        message += `You have space for ${this.space} bottles more.\n`;
        message += `You paid ${this.bill}$ for the wine.\n`;

        winesToPrint
            .sort((a, b) => a.wineName.localeCompare(b.wineName))
            .forEach((wine) => {
                message += `${wine.wineName} > ${wine.wineType} - ${wine.paid ? "Has Paid" : "Not Paid"
                    }.\n`;
            });

        return message.trim();
    }
}
