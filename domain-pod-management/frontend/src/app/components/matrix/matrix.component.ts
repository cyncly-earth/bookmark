import { Component } from '@angular/core';
import { Domain } from '../../models/domain.model';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html'
})
export class MatrixComponent {

  searchText = '';

  pods = ['Pod 1', 'Pod 2', 'Pod 3', 'Pod 4', 'Pod 5'];

  domains: Domain[] = [
    {
      name: 'Domain 1',
      members: ['Atif', 'Adijith', 'Averine', 'Meghana', 'Ananthu']
    },
    {
      name: 'Domain 2',
      members: ['Aastha', 'Sahaf', 'Nipun', 'Aswin', 'Ahnah']
    }
  ];

  addMember() {
    const name = prompt('Enter member name');
    const domain = prompt('Enter domain number (1 or 2)');
    const pod = prompt('Enter pod number (1 to 5)');

    if (!name || !domain || !pod) return;

    const dIndex = Number(domain) - 1;
    const pIndex = Number(pod) - 1;

    if (!this.domains[dIndex]) {
      alert('Invalid domain');
      return;
    }

    this.domains[dIndex].members[pIndex] = name;
  }

  deleteMember(domainIndex: number, podIndex: number) {
    this.domains[domainIndex].members[podIndex] = '';
  }

  deleteDomain(index: number) {
    this.domains.splice(index, 1);
  }
}
