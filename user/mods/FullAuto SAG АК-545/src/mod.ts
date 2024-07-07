var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Mod {
    postDBLoad(container) {
        const databaseServer = container.resolve("DatabaseServer");
        const tables = databaseServer.getTables();
        const sag545_short = tables.templates.items["628b9c37a733087d0d7fe84b"];
        sag545_short._props.weapFireType.push("fullauto");
        sag545_short._props.bFirerate = 650;
		const sag545Long = tables.templates.items["628b5638ad252a16da6dd245"];
        sag545Long._props.weapFireType.push("fullauto");
        sag545Long._props.bFirerate = 650;
    }
}
module.exports = { mod: new Mod() };