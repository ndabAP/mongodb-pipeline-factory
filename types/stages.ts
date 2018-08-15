export interface AddFields {
    (...expressions: Array<[string, any]>[]): { $addFields: {} }
}

export interface Count {
    (count: string): { $count: string }
}

export interface Group {
    (_id: any, fields?: Array<[any, any]>): { $group: {} }
}

export interface Limit {
    (limit: number): { $limit: number }
}

export interface Lookup {
    (from: string, localField: string, foreignField: string, as: string): {
        $lookup: {
            from: string,
            localField: string,
            foreignField: string,
            as: string
        }
    }
}

export interface Match {
    (expressions: any): { $match: {} }
}

export interface Project {
    (...expressions: Array<[string, any]>[]): { $project: {} }
}

export interface Sample {
    (size: number): { $sample: { size: number } }
}

export interface Skip {
    (skip: number): { $skip: number }
}

export interface Sort {
    (expressions: Array<[string, any]>): { $sort: {} }
}

export interface Unwind {
    (path: string, includeArrayIndex?: string, preserveNullAndEmptyArrays?: boolean):
        { $unwind: string | { path: string, includeArrayIndex: string, preserveNullAndEmptyArrays: boolean } }
}