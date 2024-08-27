import { Subject } from "rxjs";

export class SubjectManager {
    subject$ = new Subject();

    getSubject() {
        return this.subject$.asObservable(); // utilizamos asObservable para que no se pueda modificar el subject, es decir prohibimos el uso de la función next
    }

    setSubject(value: boolean) {
        this.subject$.next(value);
    }
}