import HewanModel from "../model/Hewan.model.js";
import { apiResponse,apiResponseValidation } from "../utils/response.js";
import { StoreHewanSchema,UpdateHewanSchema } from "../schemas/hewan.schema.js";

class HewanController {
    static async index(req,res) {
        const {
            search,
        } = req.query;

        const listHewan = await HewanModel.search(search);

        return apiResponse({
            res,
            status : 200,
            message : "List Hewan",
            data : listHewan
        })
    }
    static async show(req,res) {
        const hewanId = req.params.id;

        const hewan = await HewanModel.findById(hewanId)
        return apiResponse({
            res,
            status : 200,
            message : "Detail Hewan",
            data : hewan
        })
    }
    static async store(req,res){
        const result = StoreHewanSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{ name, species, ageMonth, vaccine} = result.data;

        const hewan = await HewanModel.create({
            name : name,
            species : species,
            ageMonth : ageMonth,
            vaccine : vaccine
        })
        return apiResponse({
            res,
            status : 200,
            message : "Hewan berhasil di buat",
            data : hewan 
        })
    }
    static async update(req, res) {
        const hewanId = req.params.id
        const result = UpdateHewanSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{name, species, ageMonth, vaccine} = result.data;
   
        const exists = await HewanModel.exists({ _id: hewanId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Hewan tidak ditemukan' })
    }
        const updateHewan = await HewanModel.findOneAndUpdate(
            { _id: hewanId },
            { name, species, ageMonth, vaccine },
            { new: true }
    )
        return apiResponse({ res, status: 200, data: updateHewan })
  }
    static async delete(req, res) {
        const hewanId = req.params.id
        const exists = await HewanModel.exists({ _id: hewanId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Hewan tidak ditemukan' })
    }
        await HewanModel.findOneAndDelete({ _id: hewanId })
            return apiResponse({ res, status: 200, message: 'Hewan berhasil dihapus', data: null })
  }

}

export default HewanController